import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { image } from '../assets/images/languageHero/image';
import { MovieTvRaw } from '../components/storeFrontPageComponents/MovieTvRaw';
import { LanguageAction } from '../redux/actions/languageAction/LanguageAction';
import { LanguageActionAction } from '../redux/actions/languageAction/LanguageActionAction ';
import { LanguageComedyAction } from '../redux/actions/languageAction/LanguageComedyAction';
import { LanguageFamilyAction } from '../redux/actions/languageAction/LanguageFamilyAction';
import { LanguageFantasyAction } from '../redux/actions/languageAction/LanguageFantasyAction';
import { LanguageHorrorAction } from '../redux/actions/languageAction/LanguageHorrorAction';
import { LanguageRecentAction } from '../redux/actions/languageAction/LanguageRecentAction';
import { LanguageScifiAction } from '../redux/actions/languageAction/LanguageScifiAction';

import ScrollTop from '../util/ScrollTop';
function LanguagePage() {
    const dispatch = useDispatch();
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const [data, setData] = useState(null);
    const languageid = location.pathname.split('/')[3];
    const language = {
        bn: 'Bengali',
        en: 'English',
        hi: 'Hindi',
        kn: 'Kannada',
        ml: 'Malayalam',
        ta: 'Tamil',
        te: 'Telugu'
    };
    useEffect(() => {
        dispatch(LanguageAction(id));
        dispatch(LanguageActionAction(id));
        dispatch(LanguageComedyAction(id));
        dispatch(LanguageFamilyAction(id));
        dispatch(LanguageFantasyAction(id));
        dispatch(LanguageHorrorAction(id));
        dispatch(LanguageRecentAction(id));
        dispatch(LanguageScifiAction(id));
    }, [dispatch, id]);
    const findLang = (ids) => {
        return language[ids];
    };

    let alllang = useSelector((state) => state.movie.allangMovie);
    let action = useSelector((state) => state.movie.langActionData);
    let comedy = useSelector((state) => state.movie.langComedyData);
    let family = useSelector((state) => state.movie.langFamilyData);
    let fantasy = useSelector((state) => state.movie.langFantasyData);
    let horror = useSelector((state) => state.movie.langHorrorData);
    let recent = useSelector((state) => state.movie.langRecentData);
    let scifi = useSelector((state) => state.movie.langScifiData);
    useEffect(() => {
        setData({
            alllang,
            action,
            comedy,
            family,
            fantasy,
            horror,
            recent,
            scifi
        });

        return () => {
            setData(null);
        };
    }, [action, alllang, comedy, family, fantasy, horror, recent, scifi]);
    return (
        <Language>
            <div className="hero">
                <img src={`${image[languageid]}`} alt="" />
            </div>
            <>
                {
                    <MovieTvRaw
                        zindex={10}
                        datas={data?.alllang}
                        title={`Movies in ${findLang(id)}`}
                    />
                }
            </>
            {data?.recent && (
                <MovieTvRaw
                    zindex={9}
                    datas={data?.recent}
                    title={'Recent movies'}
                />
            )}
            {data?.action && (
                <MovieTvRaw
                    zindex={8}
                    datas={data?.action}
                    title={'Action movies'}
                />
            )}
            {data?.comedy && (
                <MovieTvRaw
                    zindex={7}
                    datas={data?.comedy}
                    title={'Comedy movies'}
                />
            )}
            {data?.scifi && (
                <MovieTvRaw
                    zindex={6}
                    datas={data?.scifi}
                    title={'Scifi movies'}
                />
            )}

            <ScrollTop />
        </Language>
    );
}

const Language = styled.div`
    .hero {
        width: 100%;
        height: 100%;
        img {
            width: 100%;
            height: 100%;
        }
    }
`;

export default LanguagePage;
