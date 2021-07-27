import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { imgUrl } from '../../util/api_Url';
import Button from '../button/Button';

function Family() {
    const Famlydata = useSelector((state) => state.familymovies.slice(0, 5));

    return (
        <Main>
            <div className="media">
                {Famlydata &&
                    Famlydata.map((data, i) => {
                        return (
                            <div className="media1" key={i}>
                                <img
                                    src={`${imgUrl}${data.poster_path}`}
                                    alt="img"
                                />
                            </div>
                        );
                    })}
            </div>
            <div className="shadow"></div>
            <div className="detials">
                <h1 className="heading">Family Friendly</h1>
                <p>
                    With easy to use Parental Controls and a dedicated kids
                    page, enjoy secure, ad-free kids entertainment. Kids can
                    enjoy popular TV shows like Peppa Pig, Powerpuff Girls, and
                    Chhota Bheem.
                </p>
                <Button detials="Login to Prime" />
            </div>
        </Main>
    );
}

const Main = styled.div`
    margin: 0 5rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    height: 69rem;
    color: #dbdbdb;
    .media {
        position: absolute;
        left: -5rem;
        top: 0;
        width: 107%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        z-index: -1;
        .media1 {
            height: 45rem;
            width: 22rem;
            background-color: red;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

    .detials {
        width: 50%;
        height: 26rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
        .heading {
            font-size: 4rem;
            font-weight: 400;
        }
        p {
            font-size: 1.7rem;
        }
    }

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
        z-index: -1;
    }
`;
export default Family;
