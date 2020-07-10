import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import SignInPage from './pages/SignInPage';
import ErrorPage from './pages/ErrorPage';
import Header from './components/header';
import reducer from './store/reducer';
import SingleCard from './pages/SingleCard';

const logger = () => (next) => (action) => {
    console.log(action);
    return next(action);
};

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Header title="Header" />
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/sign-in" exact component={SignInPage} />
                    <Route path="/card/:id" exact component={SingleCard} />
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
