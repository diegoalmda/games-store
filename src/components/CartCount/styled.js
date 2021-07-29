import styled from 'styled-components';

export const CartCountContainer = styled.div`
  span {
    position: absolute;
    margin-right: 1rem;
    padding: .3rem .6rem;
    border-radius: 50%;
    background-color: #ff0000;
    top: 1.4rem;
    right: 1rem;
    display: ${props => props.showQT ? 'block' : 'none'};

    img {
      cursor: pointer;
    }
  }
`;