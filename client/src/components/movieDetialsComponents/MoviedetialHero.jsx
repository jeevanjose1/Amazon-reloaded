import React from 'react';
import styled from 'styled-components';
import uhd from '../../assets/images/uhd.svg';
import play from '../../assets/images/play.svg';
import xray from '../../assets/images/xray.svg';
import { imgUrl } from '../../util/api_Url';
import '../utilComponents/helper.css';
import Videoplayer from '../utilComponents/videoplayer';
import { useState } from 'react';

function MoviedetialHero({
    title,
    rating,
    overview,
    image,
    genere,
    year,
    language,
    cast
}) {
    const truncate = (string, number) => {
        return string?.length > number
            ? string.substr(0, number - 1) + '...'
            : string;
    };

    const[player,setPlayer]=useState(false)
    const handleClick = ()=>{
        
        setPlayer(!player)
    }

    
    return (
        <DetialsHetro>
                        {player && <Videoplayer setPlayer={setPlayer} player={player}/>}

            <div
                className="main"
                style={{ backgroundImage: `url(${imgUrl}${image})` }}
            >
                <div className="overlay"></div>
                <div className="detials margin">
                    <h1 className="heading mgb ">{title}</h1>
                    <div className="subdetials mgb">
                        <p className="rating uniq">{rating}</p>
                        <p className="duration uniq">2hr</p>
                        <p className="year uniq">{year}</p>
                        <img src={xray} alt="" className="Xray uniq" />
                        <img src={uhd} alt="" className="uhd uniq" />
                    </div>
                    <div onClick={handleClick} className="btn mgb">
                        <button  >
                            <img src={play} alt="" />
                        </button>
                        <p>Watch trailer</p>
                    </div>
                  
                   
                    <p className="discription mgb">{truncate(overview, 200)}</p>
                    <div className="detial mgb">
                        <dl>
                            <dt>
                                <span>Directors</span>
                            </dt>
                            <dd>Mohanlal</dd>
                        </dl>
                        <dl>
                            <dt>
                                <span>Starring</span>
                            </dt>
                            <dd>
                                {' '}
                                {cast?.map((data, i) => {
                                    return <span key={i}>{data?.name}</span>;
                                })}
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <span>Genres</span>
                            </dt>
                            <dd>
                                {genere?.map((data, i) => {
                                    return <span key={i}>{data?.name}</span>;
                                })}
                            </dd>
                        </dl>

                        <dl>
                            <dt>
                                <span>Audio languages</span>
                            </dt>
                            <dd> {language}</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </DetialsHetro>
    );
}

const DetialsHetro = styled.div`
    height: 58rem;
    width: 100%;
    color: white;
    .main {
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        background-repeat: no-repeat;
        background-position-y: 20%;
        background-size: cover;
        position: relative;
        @media (max-width: 800px) {
            background-position-x: 50%;
        }

        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                90deg,
                rgba(15, 23, 30, 1) 0%,
                rgba(15, 23, 30, 0.8970938717283788) 25%,
                rgba(15, 23, 30, 0.5553571770505077) 54%,
                rgba(15, 23, 30, 0) 94%
            );
        }
        .mgb {
            margin-bottom: 1rem;
        }
        .detials {
            z-index: 10;

            max-width: 40rem;
            min-width: 5rem;
            .heading {
                font-size: 3rem;
                font-weight: 400;
                @media (max-width: 800px) {
                    font-size: 2.5rem;
                }
            }
            .subdetials {
                display: flex;
                align-items: center;

                width: 80%;
                .uniq {
                    margin-right: 1rem;
                    margin-bottom: 1rem;
                }
                @media (max-width: 800px) {
                    flex-wrap: wrap;
                }
                font-size: 1.4rem;
                img {
                    width: 4rem;
                    height: auto;
                    @media (max-width: 800px) {
                        width: 3rem;
                    }
                }
            }

            .btn {
                display: flex;
                align-items: center;

                button {
                    background: none;
                    outline: none;
                    border: none;
                }
                p {
                    font-size: 1.8rem;
                    margin-left: 2rem;
                }
            }
            .discription {
                font-size: 1.5rem;
                max-width: 45rem;
                min-width: 5rem;
                @media (max-width: 800px) {
                    font-size: 1.3rem;
                    margin-bottom: 1.3rem;
                }
            }

            .detial {
                font-size: 1.4rem;
                width: 100%;
                @media (max-width: 800px) {
                    font-size: 1.1rem;
                    margin-bottom: 1.3rem;
                }
                dl {
                    margin-bottom: 1.3rem;
                    display: table-row;
                    dt {
                        padding-right: 2rem;
                        display: table-cell;
                    }
                    dd {
                        display: table-cell;
                        span {
                            margin-right: 1rem;
                        }
                    }
                }
            }
        }
    }
`;

export default MoviedetialHero;
