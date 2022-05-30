import React, { useEffect } from 'react';
import { Hero } from '../components/storeFrontPageComponents/Hero';
import { MovieTvRaw } from '../components/storeFrontPageComponents/MovieTvRaw';
import { useDispatch, useSelector } from 'react-redux';
import { recentAction } from '../redux/actions/recentAction';
import styled from 'styled-components';
import { ActionMovie } from '../redux/actions/ActionMovieAction';

import { Cursole } from '../components/cursoleComponent/Cursole';
import { UpcomingAction } from '../redux/actions/upcomingMovies';
import { TopRatedAction } from '../redux/actions/TopRatedAction';
import { PopularAction } from '../redux/actions/PopularMovieActoin';
import { nowPlayingAction } from '../redux/actions/NowPlayingAction';
import ScrollTop from '../util/ScrollTop';
const MoviesPage = () => {
    //assigning dispatch
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(recentAction());
        dispatch(ActionMovie());
        dispatch(UpcomingAction());
        dispatch(TopRatedAction());
        dispatch(PopularAction());
        dispatch(nowPlayingAction());
    }, [dispatch]);

    //recent movies selecting
    const RecentMoviedatas = useSelector((state) => state.movie.recentMovies);
    const ActionMoviedatas = useSelector((state) => state.movie.ActionMovie);
    const UpcomingData = useSelector((state) => state.movie.upcomingData);
    const TopRatedData = useSelector((state) => state.movie.topRateddata);
    const PopularData = useSelector((state) => state.movie.popularMovies);
    const NowPlayingdata = useSelector((state) => state.movie.nowplayingdata);
    const Familydata = useSelector((state) =>
        state.movie.familymovies?.slice(7, 15)
    );
    const recent = useSelector((state) => {
        return state.movie.recentMovies?.slice(8, 16);
    });

    return (
        <StoreFrontStyle>
            <Hero data={recent} />
            <MovieTvRaw
                zindex={10}
                datas={NowPlayingdata}
                title={'Latest movies'}
            />

            <MovieTvRaw
                zindex={9}
                datas={TopRatedData}
                // action={detialsAction}
                title={'Toprated movies'}
            />

            <MovieTvRaw
                zindex={8}
                datas={RecentMoviedatas}
                title={'Recently added movies'}
            />
            <MovieTvRaw
                zindex={7}
                datas={UpcomingData}
                title={'Upcoming Movies'}
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
                <Cursole data={Familydata} />
            </div>
            <MovieTvRaw
                zindex={6}
                datas={PopularData}
                title={'Popular movies'}
            />
            <MovieTvRaw
                zindex={5}
                datas={ActionMoviedatas}
                // action={detialsAction}
                title={'Action movies'}
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
            margin: 0rem 2rem 2rem 5rem;
            letter-spacing: 1px;
            @media (max-width: 800px) {
                margin-left: 2rem;
            }
        }
    }
`;
export default MoviesPage;
