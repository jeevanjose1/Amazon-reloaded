import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';
function Footer() {
    return (
        <Main>
            <div className="maindiv">
                <img src={logo} alt="" />
                <div className="line"></div>
                <div className="footerdetials">
                    <a href="" className="link">
                        Terms and Privacy Notice
                    </a>
                    <a href="" className="link">
                        Send us feedback
                    </a>
                    <a href="" className="link">
                        Help
                    </a>

                    <p>© 1996-2021, Amazon.com, Inc. or its affiliates</p>
                </div>
            </div>
        </Main>
    );
}

const Main = styled.div`
    width: 100%;
    height: 15rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    /* margin: 0 5rem; */
    padding-bottom: 2rem;
    .maindiv {
        height: 11.5rem;
        width: 65%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media (max-width: 800px) {
            width: 100%;
        }
        .line {
            background-color: white;
            height: 0.1rem;
            width: 65%;
            margin: 2rem 0;
        }
        .footerdetials {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            flex-wrap: wrap;
            width: 65%;
            margin-top: 1rem;
            .link {
                color: #547898;
                text-decoration: none;
                font-size: 1.2rem;
            }
            p {
                color: #707070;
                font-size: 1.2rem;
            }
        }
    }
`;

export default Footer;
