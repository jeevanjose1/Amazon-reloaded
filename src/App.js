import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router-dom';
import Footer from './components/footer/Footer';

import Header from './components/header/Header';
import GlobalStyle from './globalStyle';
import HomePage from './pages/HomePage';
import Signinpage from './pages/Signinpage';
import Signuppage from './pages/Signuppage';

import { movieAction } from './redux/actions/movieAction';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(movieAction());
    });

    const location = useLocation();

    const pathname = location.pathname;
    return (
        <div className="App">
            <GlobalStyle />
            {pathname === '/sign-in' || pathname === '/sign-up' ? null : (
                <Header />
            )}
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/sign-in" exact>
                    <Signinpage />
                </Route>
                <Route path="/sign-up" exact>
                    <Signuppage />
                </Route>
            </Switch>

            <Footer />
        </div>
    );
}

export default App;
