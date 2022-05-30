import styled from "styled-components";

import React from 'react'
import Player from "./player";

const Videoplayer = ({setPlayer,player}) => {

  const handleClick = ()=>{
 setPlayer(!player)
  }
  return (
    <PlayerStyle>
        <div onClick={handleClick} className="overlay"></div>
        <Player/>
    </PlayerStyle>
  )
}

const PlayerStyle = styled.div`
width: 100%;
height: 100%;
position: fixed;
top: 0;
left: 0;
z-index: 9999;
display: grid;
place-items: center;
.overlay{
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: black;
opacity: .5;
z-index: -1;
  top: 0;
  left: 0;
}
`



export default Videoplayer