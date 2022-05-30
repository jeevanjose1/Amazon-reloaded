import styled from "styled-components";

import React from 'react'

import { faArrowLeft,faArrowRight,faPause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Player = ({setPlayer,player}) => {

  const handleClick = ()=>{
   setPlayer(!player)
  }
  return (
    
        <Players>

        <Container>
            <PlayButtons>
                <Left>
                 <FontAwesomeIcon icon={faArrowLeft} size='4x' color='black' />
                </Left>
                <Pause>
                <FontAwesomeIcon icon={faPause} size='4x' color='black' />
                </Pause>
                <Right>
                <FontAwesomeIcon icon={faArrowRight} size='4x' color='black' />
                </Right>
            </PlayButtons>

            <Timeline>
                <form action="">
                    <input type="range" />
                </form>
                <Time>
                    <p><span>15</span>:<span>24</span></p><span>/</span> <p><span>39</span>:<span>10</span></p>
                </Time>
            </Timeline>
        </Container>

        </Players>
    
  )
}



const Players = styled.div`
width:80%;
height: 80%;
background-color: blanchedalmond;
`
const Container = styled.div`

display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 100%;
`
const PlayButtons = styled.div`
 display: flex;
 justify-content: space-around;
 align-items: center;
 height: 80%;

`
const Left = styled.div`

`
const Pause = styled.div`
margin: 0 10rem;
`
const Right = styled.div`
`
const Timeline = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: end;
height: 20%;
width: 100%;
form{
    width: 100%;
   
 input[type="range"]{
    -webkit-appearance: none;
   
  width: 100%;
  cursor: pointer;
 
  
    }

input[type="range"]::-webkit-slider-thumb{
    -webkit-appearance: none;
    

    background-color:black;
}
input[type="range"]::-webkit-slider-runnable-track{
    appearance: none;
    background-color:white
}
}
`
const Time = styled.div`
`
export default Player