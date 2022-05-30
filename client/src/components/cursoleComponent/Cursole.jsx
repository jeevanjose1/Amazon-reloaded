import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { imgUrlSmall } from '../../util/api_Url';
import { useDispatch, useSelector } from 'react-redux';
import ReactPlayer from 'react-player/youtube';
import { VideoAction } from '../../redux/actions/videoAction';
import novideo from '../../assets/images/novideo.png';
export const Cursole = ({ data }) => {
    const [index, setIndex] = useState(0);
    const dispatch = useDispatch();
    const id = data[index]?.id;

    useEffect(() => {
        dispatch(VideoAction(id));
    }, [id, dispatch]);
    const video = useSelector((state) => state.videoData);
    const leftbtns = () => {
        setIndex(index === 0 ? data.length - 1 : index - 1);
    };
    const rightbtns = () => {
        setIndex(index === data.length - 1 ? 0 : index + 1);
    };

    return (
        <CursoleStyle>
            <button className="leftbtn btn " onClick={leftbtns}>
                <FontAwesomeIcon icon={faAngleLeft} color="white" size="3x" />
            </button>
            {data.map((data, i) => {
                return (
                    <div
                        className={i === index ? ' main active' : 'main'}
                        key={i}
                    >
                        {i === index && (
                            <div className="mainsection">
                                <div
                                    className="detials"
                                    style={{
                                        backgroundImage: `url(${imgUrlSmall}${data.backdrop_path})`
                                    }}
                                >
                                    <div className="overlay"></div>
                                    <h1 className="heading">
                                        {data.title || data.original_name}
                                    </h1>
                                    <Link to={'/'} className="playlink">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="35"
                                            height="35"
                                            viewBox="0 0 35 35"
                                        >
                                            <g
                                                id="Group_6"
                                                data-name="Group 6"
                                                transform="translate(-103.377 -408.377)"
                                            >
                                                <g
                                                    id="Ellipse_8"
                                                    data-name="Ellipse 8"
                                                    transform="translate(103.377 408.377)"
                                                    fill="none"
                                                    // stroke="#e2e2e2"
                                                    strokeWidth="3.2"
                                                >
                                                    <circle
                                                        cx="17.5"
                                                        cy="17.5"
                                                        r="17.5"
                                                        stroke="none"
                                                    />
                                                    <circle
                                                        cx="17.5"
                                                        cy="17.5"
                                                        r="15.9"
                                                        fill="none"
                                                    />
                                                </g>
                                                <path
                                                    id="Polygon_1"
                                                    data-name="Polygon 1"
                                                    d="M7.479,0l7.479,13.088H0Z"
                                                    transform="translate(129.487 418.513) rotate(90)"
                                                />
                                            </g>
                                        </svg>
                                        <h3 className="play">Play now</h3>
                                    </Link>
                                </div>
                                <div className="video">
                                    {!video?.id ? (
                                        <div className="imgwapper">
                                            <img src={novideo} alt="" />
                                        </div>
                                    ) : (
                                        <ReactPlayer
                                            width="100%"
                                            height="100%"
                                            url={`https://www.youtube.com/watch?v=${video.key}`}
                                            stopOnUnmount
                                        />
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
            <button className="rightbtn btn" onClick={rightbtns}>
                <FontAwesomeIcon icon={faAngleRight} color="white" size="3x" />
            </button>
        </CursoleStyle>
    );
};

const CursoleStyle = styled.div`
    height: 43.5rem;
    width: 100%;
    color: white;
    position: relative;
    @media (max-width: 800px) {
        height: 43.5rem;
    }
    .imgwapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        img {
        }
    }
    .btn {
        background: #00000029;
        padding: 1rem;
        border: none;
        outline: none;
        position: absolute;
        bottom: 50%;
        z-index: 99;
        transform: translatey(50%);
        transition: all 0.2s ease;
        cursor: pointer;
        &:hover {
            background: #0000006a;
        }
        @media (max-width: 800px) {
            bottom: 54%;
        }
    }
    .leftbtn {
        left: 5rem;
    }
    .rightbtn {
        right: 5rem;
    }
    .active {
        opacity: 1 !important;
    }

    .main {
        width: 100%;
        height: auto;
        transition: all 1s 1s ease;
        opacity: 0;
        position: absolute;
        .mainsection {
            width: 100%;
            display: flex;

            height: 43.5rem;
            @media (max-width: 800px) {
                flex-direction: column;
            }
            .detials {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-end;
                padding: 5rem 5rem;
                width: 50%;
                flex-grow: 1;

                background-repeat: no-repeat;
                background-size: cover;
                position: relative;
                @media (max-width: 800px) {
                    width: 100%;
                    padding: 2rem 2rem;
                }
                .overlay {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    left: 0;
                    top: 0;
                    background: rgba(5, 5, 5, 0.7);

                    backdrop-filter: blur(2px);
                    -webkit-backdrop-filter: blur(2px);
                }
                .heading {
                    font-size: 3rem;
                    font-weight: 400;
                    z-index: 1;
                    margin-bottom: 1.5rem;
                }
                .playlink {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: white;
                    font-size: 1.4rem;
                    font-weight: 400;
                    text-decoration: none;
                    z-index: 1;

                    svg {
                        width: 4rem;
                        height: 4rem;
                        fill: white;
                        stroke: white;
                        transition: all 0.3s ease;
                        margin-right: 1rem;
                    }
                }
            }
            .video {
                width: 50%;
                flex-grow: 1;
                @media (max-width: 800px) {
                    width: 100%;
                    height: 100%;
                }
                overflow: hidden;
                .vid {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
`;
