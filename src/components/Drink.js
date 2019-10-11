import React from 'react'
import styled from 'styled-components';

const Div = styled.div`
    background: orange;
    border-radius: 8px;
    color: white;
`;

const Drink = ({ drink }) => {
  return (
    <Div >
      <p>{drink.name}: ¥{drink.price}, rate:{drink.rate}</p>
      <ul>
        <li>{drink.place}</li>
        <li>{drink.category}</li>
        <li>{drink.memo}</li>
      </ul>
    </Div>
  )
}

export default Drink