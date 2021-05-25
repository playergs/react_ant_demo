import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import News from './News'
import Message from "./Message";
import MyNavLink from "../../component/MyNavLink";

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home组件内容</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyNavLink className='list-group-item' to='/home/news'>news</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink className='list-group-item' to='/home/message'>Message</MyNavLink>
                        </li>
                    </ul>
                    <Switch>
                        <Route path='/home/news' component={News} />
                        <Route path='/home/message' component={Message} />
                        <Redirect to='/home/news'/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Home;