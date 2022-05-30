import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import MoviedetialHero from '../components/movieDetialsComponents/MoviedetialHero';
import MovieDetialsCrew from '../components/movieDetialsComponents/MovieDetialsCrew';
import MovieDetialsSuggections from '../components/movieDetialsComponents/MovieDetialsSuggections';
import { MvCreditAction } from '../redux/actions/movieCreditAction';
import { detialsAction } from '../redux/actions/movieDetialsAction';
import { recAction } from '../redux/actions/recAction';
import { TvCreditAction } from '../redux/actions/tvCreditAction';
import { detialsTvAction } from '../redux/actions/tvDetialAction';
import { TvRecAction } from '../redux/actions/tvRecAction';
import ScrollTop from '../util/ScrollTop';
import { Skeleton } from '@material-ui/lab';
import CrewDetials from '../components/movieDetialsComponents/crewDetials';
function MovieDetialPage() {
    //movie / tv datas
    const [data, setData] = useState([]);
    const [recdata, setRecData] = useState([]);
    const [crData, setCrData] = useState([]);
    //getting ulr param
    const { id } = useParams();

    //getting ulr mediatype
    const location = useLocation();
    const mediatype = location.pathname.split('/')[2];
 
    //dispatching actions
    const dispatch = useDispatch();
    
    const [clear, setClear]= useState(true)
    
    useEffect(() => {
       
        dispatch(recAction(id));
        dispatch(TvRecAction(id));
        if (mediatype === 'tv') {
            dispatch(detialsTvAction(id,clear));
            dispatch(TvCreditAction(id,clear));
        } else {
            dispatch(detialsAction(id,clear));
            dispatch(MvCreditAction(id,clear));
        }
    }, [id]);

useEffect(()=>{
    setClear(true)
    return  function(){
    setClear(false)      
    console.log(clear);             }
},[])
    //selectin datas from redux
    let datas = useSelector((state) => state.movie.detialMovie.movie);
    let recdatas = useSelector((state) => state.movie.recData);
    let tvrecdata = useSelector((state) => state.movie.tvRecData);
    let tvData = useSelector((state) => state.movie.detialTv.tv);
    let tvCrData = useSelector((state) => state.movie.tvCredits);
    let mvCrData = useSelector((state) => state.movie.movieCredits);

    //settng movie tv datas

    useEffect(() => {
        setData(mediatype === 'movie' ? datas : tvData);
        setRecData(mediatype === 'tv' ? tvrecdata : recdatas);
        setCrData(mediatype === 'tv' ? tvCrData : mvCrData);

        return () => {};
    }, [
        mediatype,
        datas,
        tvData,
        tvrecdata,
        recdatas,
        tvCrData,
        mvCrData,
        data
    ]);
   


    const[close, setClose]=useState(false)
  
    return data ? (
        <MovieDetials >

            {data && (
                <>
                {close && <CrewDetials close={close} setClose={setClose}/>}
                    <MoviedetialHero
                        title={data?.title || data?.name}
                        rating={data?.vote_average || data?.first_air_date}
                        year={data?.release_date}
                        overview={data?.overview}
                        image={data?.backdrop_path}
                        genere={data?.genres}
                        language={data?.original_language}
                        cast={crData?.cast?.slice(0, 3)}
                    />
                    <MovieDetialsCrew close={close} setClose={setClose} data={crData?.cast?.slice(0, 10)} />
                    <MovieDetialsSuggections
                        datas={recdata}
                        title={'Recommended '}
                    />
                    <ScrollTop />
                </>
            )}
        </MovieDetials>
    ) : (
        <Skeleton
            style={{
                zIndex: 999,
                backgroundColor: '#0F171E',
                margin: '10px'
            }}
            variant="rect"
            width="100vw"
            height="100vh"
            
        />
    );
}

const MovieDetials = styled.div`
position: relative;


`;
export default MovieDetialPage;
