import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { CardsContextProvider } from './context/cards-context';
import SignInPage from './pages/SignInPage';
import ErrorPage from './pages/ErrorPage';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <CardsContextProvider>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/sign-in" exact component={SignInPage} />
                    <Route component={ErrorPage} />
                </Switch>
            </CardsContextProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
