import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';

function Header() {
    return (
        <HeaderStyled>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <Link to="/sign-in">
                <div>
                    <button>Sign-in</button>
                </div>
            </Link>
        </HeaderStyled>
    );
}

const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 9rem;
    margin: 0 5rem;
    background-color: #0f171e;
    z-index: 999;
    button {
        border: none;
        background: none;
        color: #dbdbdb;
        font-size: 1.6rem;
        cursor: pointer;
    }
`;

export default Header;
