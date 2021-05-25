import React, {Component} from 'react';
import {Link, Route, Switch} from "react-router-dom";
import Detail from "./Detail";

class Message extends Component {
    state={
        messageArr : [
            {id : '01', title : '消息1'},
            {id : '02', title : '消息2'},
            {id : '03', title : '消息3'}
        ]
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messageArr.map(
                            (messageObj) => {
                                return (
                                    <li key={messageObj.id}>
                                        <Link to={`/home/message/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link>&nbsp;&nbsp;
                                    </li>
                                )
                            }
                        )
                    }
                </ul>
                <hr/>
                <Switch>
                    <Route path='/home/message/detail/:id/:title' component={Detail}/>
                </Switch>
            </div>
        );
    }
}

export default Message;