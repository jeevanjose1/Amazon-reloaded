import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import ua from '../../assets/images/ua.svg';
import uhd from '../../assets/images/uhd.svg';
import play from '../../assets/images/play.svg';
import xray from '../../assets/images/xray.svg';
import '../utilComponents/helper.css';
import { imgUrl } from '../../util/api_Url';
import { Redirect } from 'react-router-dom';
import { Route, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom';

export const Hero = ({ data }) => {
    //state for current index
    let [current, setCurrent] = useState(0);

    // calling redux data using useSelector function

    useEffect(() => {
        let timeoutRef = setInterval(() => {
            setCurrent(current === 7 ? 0 : current + 1);
        }, 10000);

        //reset time out
        return () => {
            if (timeoutRef) clearInterval(timeoutRef);
        };
    }, [current]);

    // truncate text
    const truncate = (string, number) => {
        return string?.length > number
            ? string.substr(0, number - 1) + '...'
            : string;
    };

    //slider function

    const slider = (index) => {
        setCurrent(index);
        // setCurrentId(id);
    };
     
    
      const location = useLocation()
      const type = location.pathname.slice(12)
      const url = type==='tv'? 'tv':'movie' || type === 'home' ? 'movie':null;
     console.log(url);
    return (
        <Main >
             
            <div className="slider">
                {data?.map((data, i) => {
                    return (
                        <div
                            className={
                                i === current ? 'slideactive slide' : 'slide'
                            }
                            onClick={() => slider(i)}
                            key={i}
                        ></div>
                    );
                })}
            </div>
            {data &&
                data.map((data, i) => {
                    return (
                        <div
                            className={
                                i === current ? 'slides active' : 'slides'
                            }
                            key={i}
                        >
                            <Link
                        className="link"
                        to={`/detial/${url}/${data.id}`}
                    >
                            {i === current && (
                                <div
                                    className="mainsection"
                                    style={{
                                        backgroundImage: `url(${imgUrl}${data.backdrop_path})`
                                    }}
                                >
                                    {' '}
                                    <div className="shadow"></div>
                                    <div className="bottomshadow"></div>
                                    <div className="container margin">
                                        <div className="detials">
                                            <h1>
                                                {data.title ||
                                                    data.original_name}
                                            </h1>
                                            <div className="subdetials ">
                                                <p className="rating uniq">
                                                    {data.vote_average}
                                                </p>
                                                <p className="duration uniq">
                                                    2hr
                                                </p>
                                                <p className="year uniq">
                                                    {data.release_date}
                                                </p>
                                                <img
                                                    src={xray}
                                                    alt=""
                                                    className="Xray uniq"
                                                />
                                                <img
                                                    src={uhd}
                                                    alt=""
                                                    className="uhd uniq"
                                                />
                                                <img
                                                    src={ua}
                                                    alt=""
                                                    className="u uniq"
                                                />
                                            </div>
                                            <p className="detial">
                                                {truncate(data.overview, 150)}
                                            </p>
                                            <div className="btn">
                                                <button>
                                                    <img src={play} alt="" />
                                                </button>
                                                <p>Watch trailer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            </Link>
                        </div>
                    );
                })}
                
        </Main>
    );
};

const Main = styled.div`
    width: 100%;
    height: 54rem;
    position: relative;
   .link{
       text-decoration: none;
   }
    .slider {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 20%;
        position: absolute;
        z-index: 2;
        right: 5rem;
        bottom: 3rem;
        @media (max-width: 800px) {
            right: 50%;
            transform: translatex(50%);
            width: 40%;
        }
        .slide {
            width: 2.5rem;
            height: 0.4rem;
            border-radius: 1rem;
            background-color: white;
            transition: all 0.1s ease;
            cursor: pointer;
            opacity: 0.5;
        }
        .slideactive {
            width: 4rem !important;
            transition: all 0.1s ease;
            opacity: 1;
        }
    }

    .active {
        opacity: 1 !important;
    }
    .slides {
        position: absolute;
        opacity: 0;
        transition: all 1s ease;
        width: 100%;
        height: 54rem;

        .mainsection {
            width: 100%;
            height: 54rem;
            background-repeat: no-repeat;
            background-size: cover;
            background-position-y: 15%;
            display: flex;
            align-items: center;
            @media (max-width: 800px) {
                background-position-x: 50%;
            }
            .shadow {
                position: absolute;
                /* z-index: 1; */
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;

                background: linear-gradient(
                    74deg,
                    rgba(15, 23, 30, 0.9251050762101716) 0%,
                    rgba(15, 23, 30, 0.7794468129048494) 23%,
                    rgba(15, 23, 30, 0) 100%
                );
            }
            .bottomshadow {
                position: absolute;
                /* z-index: 1; */
                bottom: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(
                    360deg,
                    rgba(15, 23, 30, 1) 0%,
                    rgba(15, 23, 30, 1) 5%,
                    rgba(15, 23, 30, 0) 34%
                );
            }
            .container {
                display: flex;
                width: 100%;
                flex-grow: 0.2;
                color: white;
                height: 50%;
            

                z-index: 2;
                .detials {
                    display: flex;
                    flex-direction: column;
                    /* justify-content: space-around; */
                    min-width: 30rem;
                    max-width: 60rem;
                  
                    @media (max-width: 800px) {
                        min-width: 20rem;
                        max-width: 30rem;
                    }

                    h1 {
                        font-size: 3.5rem;
                        font-weight: 400;
                        max-width: 40rem;
                        min-width: 5rem;
                        margin-bottom: 2rem;
                        text-decoration: none;
                        @media (max-width: 800px) {
                            font-size: 2.8rem;
                            margin-bottom: 1.3rem;
                        }
                    }
                    .subdetials {
                        display: flex;
                        color: #d3d3d3;
                        font-size: 1.5rem;
                       
                        @media (max-width: 800px) {
                            font-size: 1.21rem;
                            flex-wrap: wrap;
                            margin-bottom: 1.3rem;
                        }
                        width: 80%;
                        /* justify-content: space-between; */
                        img {
                            @media (max-width: 800px) {
                                width: 3rem;
                            }
                        }

                        .uniq {
                            margin-bottom: 1rem;
                            &:not(:last-child) {
                                margin-right: 1rem;
                            }
                        }
                    }
                    .detial {
                        font-size: 1.6rem;
                        max-width: 45rem;
                        min-width: 5rem;
                        color: #a1a1a1;
                        margin-bottom: 2rem;
                        @media (max-width: 800px) {
                            font-size: 1.5rem;
                            margin-bottom: 1.3rem;
                        }
                    }

                    .btn {
                        display: flex;
                        align-items: center;
                        button {
                            background: none;
                            outline: none;
                            border: none;
                            @media (max-width: 800px) {
                                width: 3rem;
                            }
                        }
                        p {
                            font-size: 1.8rem;
                            margin-left: 2rem;
                        }
                    }
                }
            }
        }
    }
`;
