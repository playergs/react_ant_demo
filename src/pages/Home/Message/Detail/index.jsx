import React, {Component} from 'react';

const data = [
    {id : '01', content: '你好，中国'},
    {id : '02', content: '你好，未来的自己'},
    {id : '03', content: '再见，从前'}
]

class Detail extends Component {
    render() {
        const {id, title} = this.props.match.params
        const findResult = data.find((dataObj)=>{
            return dataObj.id === id
        })
        return (
            <div>
                <ul>
                    <li>ID : {id}</li>
                    <li>TITLE: {title}</li>
                    <li>CONTENT: {findResult.content}</li>
                </ul>
            </div>
        );
    }
}

export default Detail;