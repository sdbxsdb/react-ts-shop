import styled from 'styled-components';

export const Wrapper = styled.aside`

  font-family: Arial, Helvetica, sans-serif;
  max-width: 100vw;
  padding: 20px;
  min-width: 300px;

  .totalBasketWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid lightblue;
  }
  
  .totalBasketPrice { 
    text-align: right;
  }
`