import React from 'react';

import styled from 'styled-components';

export const LanguageCats = ({ data }) => {
    return (
        <Language>
            <div className="link">
                <div
                    className="main"
                    style={{ backgroundImage: `url(${data.image})` }}
                >
                    <div className="shadow"></div>
                    <h3 className="heading">{data.name}</h3>
                </div>
            </div>
        </Language>
    );
};

const Language = styled.div`
    width: 17rem;
    height: 17rem;
    .link {
        text-decoration: none;
    }

    @media (max-width: 800px) {
        width: 12rem;
        height: 12rem;
    }
    .main {
        width: 17rem;
        height: 17rem;
        color: white;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        position: relative;
        padding: 2rem;
        @media (max-width: 800px) {
            width: 12rem;
            height: 12rem;
            background-position: center;
            background-size: cover;
        }
        .shadow {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1;
            height: 100%;
            background: linear-gradient(
                0deg,
                rgba(0, 0, 0, 1) 0%,
                rgba(0, 0, 0, 0.6001751042213761) 29%,
                rgba(0, 0, 0, 0.37888658881521353) 45%,
                rgba(0, 0, 0, 0) 81%
            );
        }
        .heading {
            font-size: 1.6rem;
            z-index: 5;
            @media (max-width: 800px) {
                font-size: 1.2rem;
            }
        }
    }
`;
