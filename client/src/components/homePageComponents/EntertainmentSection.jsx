import React from 'react';
import styled from 'styled-components';
import Button from '../button/Button';

import Entertainment from '../../assets/images/Entertainment.png';

function EntertainmentSection() {
    return (
        <Main>
            <MainStyled>
                <div className="shadow"></div>
                <div className="detials">
                    <h1 className="heading">Great Entertainment</h1>
                    <p>
                        With your Prime membership, you have access to exclusive
                        Amazon Originals, blockbuster Bollywood movies, regional
                        movies and more.
                    </p>
                    <Button detials="Get Started" />
                </div>
            </MainStyled>
        </Main>
    );
}

const Main = styled.div`
    background-image: url(${Entertainment});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;
const MainStyled = styled.div`
    margin: 0 5rem;
    height: 59.5rem;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #dbdbdb;

    .shadow {
        width: 100vw;
        height: 100%;
        background: linear-gradient(
            262deg,
            rgba(15, 23, 30, 1) 12%,
            rgba(15, 23, 30, 0.9923319669664741) 25%,
            rgba(15, 23, 30, 0.9167017148656338) 41%,
            rgba(15, 23, 30, 0.8018557764902836) 54%,
            rgba(15, 23, 30, 0) 100%
        );
        position: absolute;
        right: -5rem;
        z-index: 1;
    }
    .detials {
        margin-right: 5rem;
        height: 25.7rem;
        width: 60rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        position: relative;
        z-index: 1;
        .heading {
            font-size: 4rem;
            font-weight: 400;
        }
        p {
            font-size: 2rem;
        }
    }
`;
export default EntertainmentSection;
