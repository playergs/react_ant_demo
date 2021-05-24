import React, {Component} from 'react';
import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./component/Header"
import {Route, Switch} from 'react-router-dom'
import MyNavLink from "./component/MyNavLink";

class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/*<a className="list-group-item active" href="./about.html">About</a>*/}
                            {/*<a className="list-group-item" href="./home.html">Home</a>*/}
                            <MyNavLink to="/about">About</MyNavLink>
                            <MyNavLink to="/Home">Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    <Route path='/playergs/about' component={About}/>
                                    <Route path='/playergs/home' component={Home}/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
