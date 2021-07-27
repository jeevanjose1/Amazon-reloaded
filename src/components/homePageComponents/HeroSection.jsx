import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { imgUrl } from '../../util/api_Url';
import Button from '../button/Button';

function HeroSection() {
    const randomnumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const popMovie = useSelector((state) =>
        state.popularMovies.slice(randomnumber(0, 6), 20)
    );

    return (
        <MainStyled className="main">
            <div className="shadow"></div>
            <div className="detials">
                <h1 className="heading">Welcome to Prime Video</h1>
                <p>
                    Join Prime to watch the latest movies, TV shows and
                    award-winning Amazon Originals
                </p>
                <Link to="/sign-in">
                    <Button detials="Login to Prime" />
                </Link>
            </div>
            <div className="grids">
                <div className="container">
                    {popMovie &&
                        popMovie.map((e, i) => {
                            return (
                                <div className={'a' + i} key={i}>
                                    <img
                                        src={`${imgUrl}${e.poster_path}`}
                                        alt="img"
                                    />
                                </div>
                            );
                        })}
                </div>
            </div>
        </MainStyled>
    );
}

const MainStyled = styled.div`
    height: 60.75rem;
    display: flex;
    align-items: center;
    color: #dbdbdb;
    margin: 0 5rem;
    position: relative;
    .shadow {
        width: 100vw;
        height: 100%;
        background: linear-gradient(
            110deg,
            rgba(15, 23, 30, 1) 12%,
            rgba(15, 23, 30, 0.9923319669664741) 25%,
            rgba(15, 23, 30, 0.9167017148656338) 41%,
            rgba(15, 23, 30, 0.8018557764902836) 54%,
            rgba(15, 23, 30, 0) 100%
        );

        position: absolute;
        top: 0;
        left: -5rem;
        z-index: -1;
    }

    .detials {
        height: 22.3rem;
        width: 50.37rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        margin-left: 5rem;

        .heading {
            font-size: 4rem;
            font-weight: 400;
        }

        p {
            font-size: 1.7rem;
        }
    }

    .grids {
        position: absolute;
        width: 100vw;
        height: 100%;

        z-index: -2;
        overflow: hidden;
        .container {
            transform: rotateZ(-8deg);
            position: absolute;
            top: -5rem;
            left: 2rem;
            width: 100%;
            height: 150%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            grid-auto-columns: 1fr;
            grid-auto-rows: 1fr;
            gap: 0px 0px;
            grid-auto-flow: row;
        }

        .a0 {
            grid-area: 1 / 1 / 3 / 2;
        }

        .a1 {
            grid-area: 2 / 2 / 4 / 3;
        }

        .a2 {
            grid-area: 1 / 3 / 3 / 4;
        }

        .a3 {
            grid-area: 2 / 4 / 4 / 5;
        }

        .a4 {
            grid-area: 1 / 5 / 3 / 6;
        }

        .a5 {
            grid-area: 2 / 6 / 4 / 7;
        }

        .a6 {
            grid-area: 1 / 2 / 2 / 3;
        }

        .a7 {
            grid-area: 3 / 1 / 4 / 2;
        }

        .a8 {
            grid-area: 1 / 2 / 2 / 3;
        }

        .a9 {
            grid-area: 3 / 3 / 4 / 4;
        }

        .a10 {
            grid-area: 1 / 4 / 2 / 5;
        }

        .a11 {
            grid-area: 3 / 5 / 4 / 6;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;

export default HeroSection;
