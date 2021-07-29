import styled from 'styled-components';

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
`;

export const SortContainer = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;