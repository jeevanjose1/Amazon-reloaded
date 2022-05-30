import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { imgUrlSmall } from '../../util/api_Url';
import noavtr from '../../assets/images/noavtr.png';
import '../utilComponents/helper.css';
import CrewDetials from './crewDetials';
import { useDispatch } from 'react-redux';
import { CrewDetialsAction } from '../../redux/actions/crewDetialsAction';


function MovieDetialsCrew({ data, close, setClose }) {
    const [id,setId]=useState()
    const handleClick = (i)=>{
       setClose(!close)
       setId(i.id)
    }
const dispatch= useDispatch()
    useEffect(()=>{
     dispatch(CrewDetialsAction(id,close))
    },[close])

    return (
        <Cast >
            {close && <CrewDetials close={close} setClose={setClose}/>}
            <h2 className="castHeading">cast and crew</h2>
            <div className="main margin">
                {data?.map((data, i) => {
                    return (
                        <div key={i} className="cast">
                            <div className="mainsection">
                                <div onClick={()=>{
                                       handleClick(data)
                                }}  className="card">
                                    <img
                                        src={
                                            !data?.profile_path
                                                ? `${noavtr}`
                                                : `${imgUrlSmall}${data?.profile_path}`
                                        }
                                        alt=""
                                    />
                                    <p className="name">
                                        {data?.original_name}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Cast>
    );
}
const Cast = styled.div`
    margin: 6rem 0;
    color: white;
    
    .castHeading {
        font-size: 2rem;
        font-weight: 400;
        margin: 0 0rem 2rem 5rem;
        @media (max-width: 800px) {
            margin: 0 0rem 2rem 2rem;
        }
    }
    .main {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;

        height: auto;
        .cast {
            height: 19rem;
            margin-right: 1rem;
            width: 10.5rem;
            overflow: hidden;
            margin-bottom: 3rem;
            cursor: pointer;
            .castHeading {
                font-size: 2rem;
                font-weight: 400;
                margin: 0 5rem 2rem 5rem;
            }
            .mainsection {
                width: 10.5rem;

                .card {
                    width: 100%;
                    height: 15rem;
                    img {
                        width: 100%;
                        height: 90%;
                        object-fit: cover;
                    }
                    p {
                        font-size: 1.5rem;
                        margin-top: 1rem;
                    }
                }
            }
        }
    }
`;
export default MovieDetialsCrew;
