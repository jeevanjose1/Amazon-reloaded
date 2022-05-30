import React from 'react';
import styled from 'styled-components';

function Button({ detials }) {
    return <ButtonStyled>{detials}</ButtonStyled>;
}
export const ButtonStyled = styled.button`
    border: none;
    font-size: 1.6rem;
    color: #dbdbdb;
    padding: 1rem 2rem;
    background-color: #23384a;
    border-radius: none;
    cursor: pointer;
`;
export default Button;
