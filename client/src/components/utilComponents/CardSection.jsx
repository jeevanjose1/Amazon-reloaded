import styled from 'styled-components';
import { imgUrlSmall } from '../../util/api_Url';
// import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import Placeholder from '../../assets/images/Placeholder.png';

const CardSection = ({ data, setTrans }) => {
    const truncate = (string, number) => {
        return string?.length > number
            ? string.substr(0, number - 1) + '...'
            : string;
    };

    const mediatype = data.name ? 'tv' : 'movie';

    return (
        <CardSec onClick={() => setTrans(0)}>
            <Main className="main">
                <Card>
                    <Link
                        className="link"
                        to={`/detial/${mediatype}/${data?.id}`}
                    >
                        <div className="image">
                            <img
                                src={
                                    data.backdrop_path
                                        ? `${imgUrlSmall}${data?.backdrop_path}`
                                        : Placeholder
                                }
                                alt=""
                            />

                            <button>
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
                            </button>
                        </div>
                        <div className="detials">
                            <h1 className="heading">
                                {data?.title || data?.name}
                            </h1>
                            <div className="subdetials ">
                                <p className="rating uniq">
                                    {data?.vote_average}
                                </p>
                                <p className="duration uniq">2hr</p>
                                <p className="year uniq">
                                    {data?.release_date || data?.first_air_date}
                                </p>
                            </div>
                            <p>{truncate(data?.overview, 100)}</p>
                        </div>
                    </Link>
                </Card>
            </Main>
        </CardSec>
    );
};

const CardSec = styled.div`
    position: relative;
    z-index: 50;
`;
const Main = styled.div``;

const Card = styled.div`
    width: 28rem;
    height: 17.5rem;
    overflow: hidden;
    @media (max-width: 800px) {
        width: 22rem;
        height: 15rem;
    }
    .link {
        &:hover .image > button {
            opacity: 1;
        }
        &:hover .detials {
            opacity: 1;
            top: 17rem;
            visibility: visible;
            @media (max-width: 800px) {
                opacity: 0;
                top: 0rem;
                visibility: hidden;
            }
        }
        &:hover .image::after {
            opacity: 1;
        }

        .image {
            position: relative;
            height: 17.5;
            &::after {
                content: '';
                height: 100%;
                width: 100%;
                position: absolute;
                bottom: 0.3rem;
                left: 0;
                top: 0;
                z-index: 0;
                opacity: 0;
                transition: all 0.3s ease;
                background: linear-gradient(
                    41deg,
                    rgba(0, 0, 0, 1) 0%,
                    rgba(0, 0, 0, 0) 81%
                );
            }
            img {
                width: 28rem;
                height: 17.5rem;
                object-fit: cover;
                @media (max-width: 800px) {
                    margin-bottom: -2.5rem;
                }
            }
            button {
                background: none;
                color: #c4c4c4;
                cursor: pointer;
                outline: none;
                border: none;
                left: 1.5rem;
                bottom: 1.5rem;
                position: absolute;
                z-index: 99;
                opacity: 0;
                transition: all 0.5s ease;

                &:hover > svg {
                    fill: #a3bdd4;
                    stroke: #a3bdd4;
                }
                svg {
                    width: 4rem;
                    height: 4rem;
                    fill: white;
                    stroke: white;
                    transition: all 0.3s ease;
                }
            }
        }
        .detials {
            padding: 2rem 2rem 2rem 2rem;
            background-color: #1b2935;
            position: absolute;
            z-index: -4;
            transition: all 0.2s ease;
            top: 17.5rem;
            visibility: hidden;
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;

            .subdetials {
                display: flex;
                width: 14rem;
                justify-content: space-between;
                margin-bottom: 0.5rem;
            }

            .heading {
                font-size: 1.5rem;
                font-weight: 600;
                margin-bottom: 0.5rem;
                color: #aaabb3;
            }
            p {
                font-size: 1.2rem;
                color: #ffffff;
            }
            &::after {
                content: '';
                height: 0.5rem;
                width: 100%;
                position: absolute;
                bottom: 0;
                left: 0;
                background-color: #2e4558;
            }
        }
    }
`;
export default CardSection;
