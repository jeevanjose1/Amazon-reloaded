import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import search from '../../assets/images/search.svg';
import logo from '../../assets/images/logo.svg';
import avtar from '../../assets/images/avtar.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../utilComponents/helper.css';
import LogOutAction from '../../redux/actions/authAction/LogoutAction';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

export const StoreHeader = ({ setUser }) => {
    const [actives, setActive] = useState(false);
    const [logActive, setLogActive] = useState(false);
    const dispatch = useDispatch();
    const logout = () => {
        localStorage.clear();
        setUser(null);
        dispatch(LogOutAction());
    };
    const location= useLocation()
    const pathname = location.pathname
    console.log(pathname.slice(12));
  
  
    return (
        <HeaderStyled>
            <div className="main padding">
                <div>
                    <Link to="/storefront">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="detials">
                    <button
                        className="btndown"
                        onClick={() => setActive(!actives)}
                    >
                        <FontAwesomeIcon
                            icon={faAngleDown}
                            size="2x"
                            color="white"
                        />
                    </button>
                    <div
                        className={actives === true ? 'active links' : 'links'}
                       
                    >
                        <div
                            className={
                                actives === true ? 'active wrapper' : 'wrapper'
                            }
                        >
                            <Link to="/storefront/home" className="link" style={pathname.slice(12)==='home' || pathname==='/storefront' ? {backgroundColor:" #263747"}:{background:'none'}}>
                                Home
                            </Link>
                            <Link to="/storefront/movie" className="link" style={pathname.slice(12)==='movie' ?{backgroundColor:" #263747"}:{background:'none'}}>
                                Movies
                            </Link>''
                            <Link to="/storefront/tv" className="link" style={pathname.slice(12)==='tv' ?{backgroundColor:" #263747"}:{background:'none'}} >
                                Tv shows
                            </Link>
                        </div>
                    </div>

                    <div className="options">
                        <form action="" className="search">
                            <input
                                type="text"
                                placeholder="Search..."
                                name=""
                                id=""
                            />
                            <button className="search">
                                <img src={search} alt="" />
                            </button>
                        </form>
                        <button
                            onClick={() => setLogActive(!logActive)}
                            className="optionbtn"
                        >
                            <img src={avtar} alt="" />
                        </button>
                        <div
                            className={
                                logActive === true
                                    ? 'option activeLog'
                                    : 'option'
                            }
                        >
                            <button onClick={logout} className="logout">
                                Log-out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </HeaderStyled>
    );
};
const HeaderStyled = styled.header`
    position: sticky;
    top: 0;
    z-index: 999;
    width: 100vw;
    .main {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        height: 9rem;

        bottom: 50%;
        background-color: #0f171e;

        button {
            background: none;
            outline: none;
            border: none;
        }
       
        .link {
            text-decoration: none;
            color: white;
            font-size: 1.6rem;
            margin-right: 1rem;
            padding:0.5rem 1rem ;
            border-radius:.5rem;
            
          
              
           
          
            @media (max-width: 800px) {
                font-size: 1.8rem;
                padding: 1rem 2rem;
                margin: 0;
            }
            &:hover {
                background-color: #263747;
            }
        }

        .detials {
            display: flex;
            flex-grow: 0.15;
            justify-content: space-around;
            align-items: center;
            .btndown {
                display: none;
                @media (max-width: 800px) {
                    display: block;
                    cursor: pointer;
                }
            }
            .active {
                @media (max-width: 800px) {
                    display: flex !important;
                    transform: translatey(3.5rem) !important;
                    visibility: visible !important;
                }
            }
            .links {
                flex-grow: 0.5;

                .wrapper {
                    display: flex;

                    @media (max-width: 800px) {
                        display: flex;
                        flex-direction: column;
                        width: 100%;

                        transition: all 0.5s ease;
                        background-color: #1c2935;
                    }
                }
                @media (max-width: 800px) {
                    position: absolute;
                    transform-origin: top;
                    transition: transform 0.3s ease;
                    flex-direction: column;
                    visibility: hidden;
                    width: 100%;
                    height: 100vh;
                    transform-origin: top;
                    transform: translatey(-15rem);
                    background: linear-gradient(
                        180deg,
                        rgba(15, 23, 30, 1) 0%,
                        rgba(15, 23, 30, 0.8970938717283788) 25%,
                        rgba(15, 23, 30, 0.5553571770505077) 54%,
                        rgba(15, 23, 30, 0) 94%
                    );
                    z-index: -1;

                    overflow: hidden;
                    left: 0;
                    bottom: -90vh;
                }
            }
            form {
                display: flex;
                align-items: center;
                position: relative;
                margin-right: 1rem;
                @media (max-width: 800px) {
                    display: none;
                }
                input {
                    background-color: #2a3b4a;
                    color: white;
                    border: none;
                    outline: none;
                    border-radius: 50px;
                    width: 29rem;
                    padding: 0.5rem 1.2rem;
                    &::placeholder {
                        color: #f0f0f0;
                    }
                }
                .search {
                    display: flex;
                    align-items: center;
                    position: absolute;
                    right: 0.6rem;
                    bottom: .5rem;
                    cursor: pointer;
                    padding-top:1rem;
                }
            }
            .options {
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                .activeLog {
                    transform: translatey(0rem) !important;
                    @media (max-width:800px){
                         transform:translatex(0);
                    } 
                }
              
                .option {
                    background-color: #2a3b4a;
                    width: 40rem;
                    height: 6rem;
                    position: absolute;
                    right:0;
                    padding: 1rem;
                    top: 5.5rem;
                    transform: translatey(-7rem);
                    transition: all 0.5s ease;
                    z-index: -1;
                    @media (max-width: 800px) {
                        width: 25rem;
                         transform: translatex(25rem);
                         right:-6vw;
                    }
                    .logout {
                        border-radius: none;
                        border: none;
                        z-index: 99;
                        color: white;
                        font-size: 1.6rem;
                    }
                }
                button {
                    display: flex;
                    align-items: center;
                    cursor: pointer;

                    

                    border-radius: 50%;
                }
            }
        }
    }
`;
