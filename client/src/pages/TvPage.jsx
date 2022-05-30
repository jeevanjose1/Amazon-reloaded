import React, { useEffect } from 'react';
import { Hero } from '../components/storeFrontPageComponents/Hero';
import { MovieTvRaw } from '../components/storeFrontPageComponents/MovieTvRaw';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Cursole } from '../components/cursoleComponent/Cursole';
import { TvAction } from '../redux/actions/TvAction';
import ScrollTop from '../util/ScrollTop';
const MoviesPage = () => {
    //assigning dispatch
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(TvAction());
        // dispatch(RecentTvdata());
    }, [dispatch]);

    //recent movies selecting
    // const tvonairdata = useSelector((state) => state?.tvOnAir);

    const upcomingtvdata = useSelector((state) => state?.movie.UpcommingTv);
    const populartvdata = useSelector((state) => state?.movie.PopularTv);
    // const topratedtvdata = useSelector((state) => state?.TopRatedTv);
    const tvonairdata = useSelector((state) =>
        state.movie.tvOnAir?.slice(0, 10)
    );
    const animationtvdata = useSelector((state) => state.movie.AnimationTv);
    const scifitvdata = useSelector((state) => state.movie.ScifiTv);
    const topratedtvdata = useSelector((state) => {
        return state.movie.TopRatedTv?.slice(8, 16);
    });
    console.log(topratedtvdata);
    return (
        <StoreFrontStyle>
            <Hero data={tvonairdata} />
            <MovieTvRaw
                zindex={10}
                datas={populartvdata}
                title={'Latest movies'}
            />

            <MovieTvRaw
                zindex={9}
                datas={upcomingtvdata}
                // action={detialsAction}
                title={'Toprated movies'}
            />

            <MovieTvRaw
                zindex={8}
                datas={tvonairdata}
                title={'Recently added movies'}
            />
            <MovieTvRaw
                zindex={7}
                datas={scifitvdata}
                title={'Comedy tv series'}
            />
            {/* <MovieTvRaw
                zindex={9}
                datas={OrginalData}
                title={'Amazon Original series'}
            />
            <MovieTvRaw
                zindex={8}
                datas={RecentTvdatas}
                title={'Recently added Tv'}
            /> */}

            <div className="cursole">
                <h1 className="mainheadingcursole">Previews for you</h1>
                {topratedtvdata && <Cursole data={topratedtvdata} />}
            </div>
            <MovieTvRaw
                zindex={6}
                datas={animationtvdata}
                title={'Animation Tv shows'}
            />
            <ScrollTop />
        </StoreFrontStyle>
    );
};

const StoreFrontStyle = styled.div`
    position: relative;
    .mainheadinglanguage {
        color: white;
        font-size: 1.8rem;
        font-weight: 400;
        margin-bottom: 3rem;
        letter-spacing: 1px;
    }

    .language {
        .links {
            justify-content: space-between;
            display: flex;
        }
        margin: 3rem 5rem;
    }
    .cursole {
        margin: 10rem 0;
        .mainheadingcursole {
            color: white;
            font-size: 1.8rem;
            font-weight: 400;
            margin: 0rem 3rem 3rem 5rem;
            letter-spacing: 1px;
        }
    }
`;
export default MoviesPage;
