import React from "react";
import ReactDOM from 'react-dom';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import {Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import main from "./contents/main/main";
import content from "./contents/content/content";
import about from "./contents/about/about";

const App = () => {

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-12 col-lg-12 col-sm-12 col-md-12 col-xs-12 col-12'>
                        <Header/>
                    </div>
                </div>

                <div className='row'>
                    <Router history={createBrowserHistory()}>
                        <div className='col-xl-2 col-lg-2 col-sm-12 col-md-12 col-xs-12 col-12'
                             style={{marginTop: '10px'}}>
                            <Navigation/>
                        </div>
                        <div className='col-xl-10 col-lg-10 col-sm-12 col-md-12 col-xs-12 col-12'>

                            <Switch>
                                <Route path='/' exact component={main}/>
                                <Route path='/data' exact component={content}/>
                                <Route path='/about' exact component={about}/>
                            </Switch>

                        </div>
                    </Router>
                </div>

            </div>
        </div>
    )
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);