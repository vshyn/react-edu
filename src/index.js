import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import Main from './pages/Main';
import Header from './components/header';
import SignInPage from './pages/SignInPage';
import ErrorPage from './pages/ErrorPage';
import SingleCard from './pages/SingleCard';
import SettingsPage from './pages/SettingsPage';
import reducers from './store/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = () => (next) => (action) => {
    console.log(action);
    return next(action);
};

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk, logger))
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/sign-in" exact component={SignInPage} />
                    <Route path="/card/:id" exact component={SingleCard} />
                    <Route
                        path="/settings"
                        render={() =>
                            JSON.parse(localStorage.getItem('authData'))?.admin ? (
                                <SettingsPage />
                            ) : (
                                <ErrorPage />
                            )
                        }
                    />
                    <Route component={ErrorPage} />
                </Switch>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
