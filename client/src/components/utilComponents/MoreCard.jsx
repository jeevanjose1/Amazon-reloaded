import { Link } from '@material-ui/core';
import styled from 'styled-components';
import play from '../../assets/images/play.svg';
import { imgUrlSmall } from '../../util/api_Url';

function MoreCard({ data }) {
    return (
        <MoreCardStyle>
            <div className="main">
                <div className="img">
                    <img src={`${imgUrlSmall}${data?.backdrop_path}`} alt="" />
                </div>
                <div className="detials">
                    <Link className="play">
                        <img src={play} alt="" />
                    </Link>
                    <div className="line"></div>
                    <div className="detial">
                        <h2 className="heading">{data?.title || data?.name}</h2>
                        <div className="subdetials">
                            <p className="releasedate">
                                {data?.first_air_date || data?.relese_date}
                            </p>
                            <p className="duration">2hr</p>
                        </div>
                    </div>
                </div>
            </div>
        </MoreCardStyle>
    );
}

const MoreCardStyle = styled.div`
    width: calc(100%/4 - 5px);
    height: 100%;
    margin-bottom:1rem;
    @media (max-width:1024px){
        width: calc(100%/3 - 5px);
    }
    @media (max-width:800px){
        width: calc(100%/2 - 5px);
    }
    @media (max-width:535px){
        width:100%;
        height:100%;
        margin-bottom:1.5rem;
    }
    .main {
        .img {
            width: 100%;
            height: 15rem;
            background-color: red;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .detials {
            padding: 1rem 1rem;
            display: flex;
            background-color: #242c32;
            align-items: center;
            width: 100%;
            height: 8rem;
            .play {
                margin-right: 1.5rem;
            }
            .line {
                width: 0.08rem;
                background-color: white;
                height: 3.8rem;

                margin-right: 1.5rem;
            }
            .detial {
                .heading {
                    font-size: 1.4rem;
                    font-weight: 400;
                }
                .subdetials {
                    display: flex;
                    .releasedate {
                        margin-right: 1rem;
                    }
                }
            }
        }
    }
`;
export default MoreCard;
