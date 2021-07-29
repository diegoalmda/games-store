import styled from 'styled-components';

export const Container = styled.div`
  transition: all .4s ease;
  transform: translateX(1);
  width: 40rem;
  display: ${props => props.showCart ? 'block' : 'none'};
  background-color: #0000ff;
  color: #fff;
  h2 {
    padding: 1rem
  }
`;

export const Span = styled.span`
  margin: .5rem;

  button {
    cursor: pointer;
    padding: .2rem .5rem;
    background-color: transparent;
    font-weight: bolder;
    outline: none;
    border:none;

    &:hover {
      text-decoration: underline;
      text-decoration-thickness: .2rem;
      text-decoration-color: #ff0000;
    }
  }
`;

export const ContainerCart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0 1rem 1rem 1rem;
`;

export const ContainerImage = styled.div`
  display: flex;

  img {
    width: 6rem;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;

  p {
    font-size: 1.2rem;
    font-weight: bold;
    padding-bottom: .8rem;
  }

  span {
    color: #000;
    font-size: .9rem;
    font-weight: bold;
    padding-bottom: .5rem;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;

  button {
    width: 2rem;
    margin-right: 1rem;
    font-size: 1.5rem;
    cursor: pointer;
    background-color: #02124a;
    color: #fff;
    border: 1px solid #02124a;

    &:hover {
      color: #02124a;
      background-color: #fff;
    }
  }
`;

export const ResultContainer = styled.div`
  margin: 3rem 1rem;

  p {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  button {
    cursor: pointer;
    padding: .4rem;
    background-color: #fff;
    border-radius: .4rem;
    color: #02124a;
    font-weight: bold;
    
    &:hover {
      background-color: #02124a;
      color: #fff;
    }
  }
`;