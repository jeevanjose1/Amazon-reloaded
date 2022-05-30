
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { imgUrl } from '../../util/api_Url';

function CrewDetials({setClose,close}) {

  let crewdata =  useSelector((state) => state?.movie?.crDetials);
  const truncate = (string, number) => {
    return string?.length > number
        ? string.substr(0, number - 1) + '...'
        : string;
};



  return (
     
    <CrewStyle>
        
        <Box>
            <div className="photo">
                <img src={`${imgUrl}/${crewdata?.profile_path}`} alt="" />
            </div>
            <div className="detials">
                <h1>{crewdata?.name} {crewdata?.also_known_as[0] && <span>({crewdata?.also_known_as[0]})</span>}</h1>
                <h3>Date of birth : <span>{crewdata?.birthday}</span></h3>
                <h3>Place of birth : <span>{crewdata?.place_of_birth}</span></h3>
                <h3>Dipartment : <span>{crewdata?.known_for_department}</span></h3>
                <div className='bio'>
                    
               
                <p>
                    {truncate(crewdata?.biography,500)}
                </p>
                </div>

            </div>
        </Box>
        
        <div onClick={()=>{
         setClose(false)
         
        }}  className="overlay"></div>
    </CrewStyle>
  
   
  )
}

const CrewStyle = styled.div`

position: fixed;
left: 0;
top: 0;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
z-index:99;
.overlay{
    width: 100%;
    height: 100%;
  

    
   z-index:-1;
    position: fixed;
    top: 0;
    left: 0;
   
    background: #1f1f1f16;
    
     backdrop-filter: blur( 1.5px );
    -webkit-backdrop-filter: blur( 2px );


}


`
const Box = styled.div`
width:70rem;
height: 55rem;
background-color: #0F171E;
display: flex;
align-items: center;
.photo{
    width:45% ;
    height: 100%;
   
    overflow: hidden;
   img{
       width: 150%;
       

   }
}
.detials{
    padding: 1.5rem;
    width: 55%;
    h1{
        margin-bottom: 1.5rem;
        font-weight: 500;
        font-size: 24px;
    }

    h3{
        margin-bottom: 1rem;
    }
    p{
        font-size: 1.1rem;
        line-height: 2.5ch;
    }
}

`


export default CrewDetials