import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import Footer from './components/footer/Footer';
import { Skeleton } from '@material-ui/lab';
import Header from './components/header/Header';
import { StoreHeader } from './components/header/StoreHeader';
import GlobalStyle from './globalStyle';
import MorePage from './pages/MorePage';
import { movieAction } from './redux/actions/movieAction';

const HomePage = React.lazy(() => import('./pages/HomePage.jsx'));
const Signinpage = React.lazy(() => import('./pages/Signinpage.jsx'));
const Signuppage = React.lazy(() => import('./pages/Signuppage'));
const StoreFront = React.lazy(() => import('./pages/StoreFront'));
const MovieDetialPage = React.lazy(() => import('./pages/MovieDetialPage'));
const MoviesPage = React.lazy(() => import('./pages/MoviesPage'));
const TvPage = React.lazy(() => import('./pages/TvPage'));
const LanguagePage = React.lazy(() => import('./pages/LanguagePage'));

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(movieAction());
    }, [dispatch]);

    const [user, setUser] = useState(null);
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile'))?.id);
    }, []);

    return (
        <div className="App">
            <GlobalStyle />

            {user ? <StoreHeader setUser={setUser} /> : <Header />}
            <React.Suspense
                fallback={
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
                }
            >
                {user ? (
                    <Switch>
                        <Route path="/storefront" exact>
                            <StoreFront />
                        </Route>
                        <Route path="/" exact>
                            <StoreFront />
                        </Route>
                        <Route path="/storefront/home" exact>
                            <StoreFront />
                        </Route>
                        <Route path="/storefront/movie">
                            <MoviesPage />
                        </Route>
                        <Route path="/storefront/tv">
                            <TvPage />
                        </Route>
                        <Route path="/detial/:mediatype/:id" exact>
                            <MovieDetialPage />
                        </Route>
                        <Route path="/storefront/:id/:language" exact>
                            <LanguagePage />
                        </Route>
                        <Route path="/search/:id" exact>
                            <MorePage />
                        </Route>
                    </Switch>
                ) : (
                    <Switch>
                        <Route path="/" exact>
                            <HomePage />
                        </Route>
                        <Route path={'/sign-in'} exact>
                            <Signinpage />
                        </Route>
                        <Route path="/sign-up" exact>
                            <Signuppage />
                        </Route>
                    </Switch>
                )}
            </React.Suspense>
            <Footer />
        </div>
    );
}

export default App;
