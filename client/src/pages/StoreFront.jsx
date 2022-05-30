import React, { useEffect } from 'react';
import { Hero } from '../components/storeFrontPageComponents/Hero';
import { MovieTvRaw } from '../components/storeFrontPageComponents/MovieTvRaw';

import { useDispatch, useSelector } from 'react-redux';
import { recentAction } from '../redux/actions/recentAction';
import styled from 'styled-components';
import { ActionMovie } from '../redux/actions/ActionMovieAction';
import { RecentTv } from '../redux/actions/recentAddedTv';
import { orginalAction } from '../redux/actions/OrginalsAction';
import { LanguageCats } from '../components/language/languageCats';
import { languageImages } from '../components/language/languagesimages';
import '../components/utilComponents/helper.css';
import { Cursole } from '../components/cursoleComponent/Cursole';

import ScrollTop from '../util/ScrollTop';
import { Link } from 'react-router-dom';

const StoreFront = () => {
    //assigning dispatch
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(recentAction());
        dispatch(ActionMovie());
        dispatch(RecentTv());
        dispatch(orginalAction());
    }, [dispatch]);

    //recent movies selecting

    const RecentMoviedatas = useSelector((state) => state.movie.recentMovies);
    const ActionMoviedatas = useSelector((state) => state.movie.ActionMovie);
    const RecentTvdatas = useSelector((state) => state.movie.RecentAddedTv);
    const OrginalData = useSelector((state) => state.movie.orginalData);
    const Familydata = useSelector((state) =>
        state.movie.familymovies?.slice(10, 19)
    );
    const recent = useSelector((state) => {
        return state.movie.recentMovies?.slice(0, 8);
    });

    return (
        RecentMoviedatas && (
            <StoreFrontStyle>
                <Hero data={recent} />
                <MovieTvRaw
                    zindex={10}
                    datas={RecentMoviedatas}
                    title={'Recently added movies'}
                    action={recentAction}
                />
                <MovieTvRaw
                    zindex={9}
                    datas={OrginalData}
                    title={'Amazon Original series'}
                />
                <MovieTvRaw
                    zindex={8}
                    datas={RecentTvdatas}
                    title={'Recently added Tv'}
                />

                <div className="language margin">
                    <h1 className="mainheadinglanguage">
                        Watch in Your Language
                    </h1>
                    <div className="links">
                        {languageImages.map((data, i) => {
                            return (
                                <Link
                                    to={`/storefront/${data?.id}/${data?.name}`}
                                    className="wrapper"
                                    key={i}
                                >
                                    <LanguageCats data={data} />
                                </Link>
                            );
                        })}
                    </div>
                </div>

                <div className="cursole">
                    <h1 className="mainheadingcursole">Previews for you</h1>
                    <Cursole data={Familydata} />
                </div>

                <MovieTvRaw
                    zindex={7}
                    datas={ActionMoviedatas}
                    // action={detialsAction}
                    title={'Action movies'}
                />
                <ScrollTop />
            </StoreFrontStyle>
        )
    );
};

const StoreFrontStyle = styled.div`
    .loading {
        width: 100%;
    }
    position: relative;
    .mainheadinglanguage {
        color: white;
        font-size: 1.8rem;
        font-weight: 400;
        margin-bottom: 3rem;
        letter-spacing: 1px;
    }

    .language {
        width: auto;
        .links {
            display: flex;

            @media (max-width: 800px) {
                flex-wrap: wrap;
            }
            justify-content: flex-start;
            .wrapper {
                margin-bottom: 2rem;
                &:not(:last-child) {
                    margin-right: 2rem;
                }
            }
        }
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
export default StoreFront;
