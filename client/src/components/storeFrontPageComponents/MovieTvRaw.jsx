import React, { useState } from 'react';

import styled from 'styled-components';
// import { CardSection } from '../utilComponents/CardSection';
import { Skeleton } from '@material-ui/lab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CardSection = React.lazy(() => import('../utilComponents/CardSection'));
const arr = [1, 2, 3, 4, 5, 6, 7];
export const MovieTvRaw = ({ datas, action, title, zindex, more = true }) => {
    //cursol
    const [trans, setTrans] = useState(0);

    //leftbtn
    const rightbtn = () => {
        setTrans(trans + 1);
    };
    const leftbtn = () => {
        setTrans(trans < 0 ? trans : trans - 1);
    };

    return (
        <RecentlyMovies style={{ zIndex: zindex }}>
            <div className="head">
                <h1 className="heading">{title}</h1>
                {more && (
                    <Link
                        to={{ pathname: `/search/${title}`, data: datas }}
                        className="more"
                    >
                        More
                    </Link>
                )}
            </div>
            <Mains className="mains">
                {trans === 0 ? (
                    ''
                ) : (
                    <button onClick={leftbtn} className="leftbtn btn">
                        <FontAwesomeIcon
                            icon={faAngleLeft}
                            size="3x"
                            color="white"
                        />
                    </button>
                )}
                <div
                    className="main"
                    style={
                        trans === 0
                            ? {
                                  transform: ` translatex(-${0}px)`
                              }
                            : {
                                  transform: ` translatex(-${
                                      280 * 5 * trans + 20 * datas?.length
                                  }px)`
                              }
                    }
                >
                    <>
                        {datas &&
                            datas?.map((data, i) => {
                                return (
                                    <div className="mains" key={i}>
                                        <CardSection
                                            className="card"
                                            key={i}
                                            data={data}
                                            i={i}
                                            setTrans={setTrans}
                                        />
                                    </div>
                                );
                            })}

                        {!datas &&
                            arr.map((_, i) => {
                                return (
                                    <Skeleton
                                        style={{
                                            zIndex: 999,
                                            backgroundColor: '#223342',
                                            margin: '10px'
                                        }}
                                        variant="rect"
                                        width={260}
                                        height={165}
                                        key={i}
                                    />
                                );
                            })}
                    </>
                </div>
                {trans === Math.round(datas?.length / 5 - 1) ||
                datas?.length <= 6 ? (
                    ''
                ) : (
                    <button onClick={rightbtn} className="righttbtn btn">
                        <FontAwesomeIcon
                            icon={faAngleRight}
                            size="3x"
                            color="white"
                        />
                    </button>
                )}
            </Mains>
        </RecentlyMovies>
    );
};
const Mains = styled.div`
    position: relative;
    margin-top: 2rem;

    height: 17.5rem;
    @media (max-width: 800px) {
        overflow-x: scroll;
        overflow-y: hidden;
    }
    &::-webkit-scrollbar {
        display: none;
    }
    .btn {
        position: absolute;
        z-index: 99999;
        top: 0;
        height: 17.5rem;
        width: 7rem;
        outline: none;
        cursor: pointer;
        border: none;
        opacity: 0.6;
        transition: all 0.3s ease;
        @media (max-width: 800px) {
            display: none;
        }
        &:hover {
            opacity: 1;
        }
    }
    .righttbtn {
        right: 0rem;
        background: linear-gradient(
            270deg,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0.6001751042213761) 52%,
            rgba(0, 0, 0, 0.37888658881521353) 68%,
            rgba(0, 0, 0, 0) 84%
        );
    }
    .leftbtn {
        left: 0rem;
        background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0.6001751042213761) 52%,
            rgba(0, 0, 0, 0.37888658881521353) 68%,
            rgba(0, 0, 0, 0) 84%
        );
    }
`;
const RecentlyMovies = styled.div`
    position: relative;
    margin: 2rem 0;
    height: 25rem;
    .active {
        overflow: visible !important;
    }

    .head {
        margin-left: 5rem;
        @media (max-width: 800px) {
            margin-left: 2rem;
        }
        display: flex;
        align-items: center;

        .heading {
            color: white;
            font-size: 1.8rem;
            font-weight: 400;
            letter-spacing: 1.5px;
            padding: 2rem, 5rem;
            margin-right: 2rem;
        }
        .more {
            text-decoration: none;
            font-size: 1.3rem;
            color: #aaaaaa;
            &:hover {
                color: white;
            }
        }
    }

    .main {
        display: flex;

        width: 100%;
        height: 100%;

        transition: all 1s ease;
        .mains {
            cursor: pointer;
            &:not(:last-child) {
                margin-right: 2rem;
            }

            &:first-child {
                margin-left: 5rem;
                @media (max-width: 800px) {
                    margin-left: 2rem;
                }
            }
        }
    }
`;
