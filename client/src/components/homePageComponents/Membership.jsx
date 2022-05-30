import React from 'react';
import styled from 'styled-components';
import Button from '../button/Button';
import member from '../../assets/images/member.svg';
function Membership() {
    return (
        <Main>
            <div className="shadow"></div>
            <div className="detials">
                <h1 className="heading">One membership, many benefits</h1>
                <p>
                    Your Prime membership now also includes ad-free music along
                    with unlimited free, fast delivery on eligible items,
                    exclusive access to deals & more.
                </p>
                <Button detials="Login to Prime" />
            </div>

            <div className="image">
                <img src={member} alt="" />
            </div>
        </Main>
    );
}

const Main = styled.div`
    margin: 0 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #dbdbdb;
    height: 54rem;
    position: relative;
    .shadow {
        width: 100vw;
        height: 100%;

        background: linear-gradient(
            97deg,
            rgba(15, 23, 30, 0.9251050762101716) 2%,
            rgba(15, 23, 30, 0.7794468129048494) 39%,
            rgba(15, 23, 30, 0) 100%
        );

        position: absolute;
        top: 0;
        left: -5rem;
        z-index: 1;
    }
    .detials {
        width: 57rem;
        height: 34rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;
        position: relative;
        z-index: 2;
        .heading {
            font-size: 4rem;
            font-weight: 400;
        }
        p {
            font-size: 1.7rem;
        }
    }
`;
export default Membership;
